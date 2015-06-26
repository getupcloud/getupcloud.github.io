require "yaml"
require "fileutils"

CONF = YAML.load(File.open(File.join(File.dirname(__FILE__), "provision/config.yml"), File::RDONLY).read)

VAGRANTFILE_API_VERSION = "2"
Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.ssh.shell = "bash -c 'BASH_ENV=/etc/profile exec bash'"

  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  config.vm.hostname = CONF['vm']['name']
  config.vm.network "private_network", type: "dhcp"
  config.vm.network "forwarded_port", guest: 80, host: 8080, auto_correct: true
  config.vm.network "forwarded_port", guest: 8000, host: 8180, auto_correct: true
  config.vm.usable_port_range = 52000..53000

  config.vm.provider "virtualbox" do |vb|
    vb.customize ['modifyvm', :id, '--usb', 'on']
    vb.customize ['usbfilter', 'add', '0', '--target', :id, '--name', '1197123b', '--vendorid', '0x04e8']
    vb.customize ['usbfilter', 'add', '0', '--target', :id, '--name', 'android', '--vendorid', '0x18d1']
    vb.customize ['usbfilter', 'add', '0', '--target', :id, '--name', 'androidMoto', '--vendorid', '0x22b8']
    vb.name = CONF['vm']['name']
    vb.customize ["modifyvm", :id, "--memory", CONF['vm']['memory']]
  end

  config.vm.define CONF['vm']['name'] do |vb|
  end

  cache_apt = vcache(config.vm.box)
  config.vm.synced_folder cache_apt, "/var/cache/apt/archives/", type: "nfs", nfs_udp: false
  config.vm.synced_folder ".", "/vagrant", disabled: true
  config.vm.synced_folder ".", "/srv/shared", type: "nfs", nfs_udp: false

  config.vm.provision "shell", run: "always", inline: "cat /etc/network/interfaces | grep -v 'post-up' | tee /etc/network/interfaces 1>/dev/null 2>&1 ; sed -i.bak 's/timeout=-1/timeout=1/' /etc/grub.d/00_header ; rm /etc/grub.d/00_header.bak"
  config.vm.provision "shell", path: "./provision/provisioner.sh"
  
  config.vm.provision "shell", run: "always", inline: "IP=$(ifconfig eth1 | grep 'inet addr' | awk '{print $2}' | sed 's/addr://'); echo \"Running: ${IP}\""
  
end

def vcache(box_name)
  cache_dir = File.join(File.expand_path("~"), '.vagrant.d', 'cache', 'apt', box_name)
  partial_dir = File.join(cache_dir, 'partial')
  FileUtils.mkdir_p(partial_dir) unless File.exists? partial_dir
  cache_dir
end
