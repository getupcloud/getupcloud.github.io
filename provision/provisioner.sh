#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
rm -rf /vagrant
mkdir -p /srv/shared/.tmp

echo "+ configure profile"
echo "CURRENT_IP=\$(ifconfig eth1 | grep 'inet addr' | awk '{print \$2}')" > /home/vagrant/.bash_profile
echo 'echo -e "\nCurrent IP ${CURRENT_IP}\n"' >> /home/vagrant/.bash_profile
echo "cd /srv/shared" >> /home/vagrant/.bash_profile

echo "+ update apt repository"
apt-get -q -y update 1>/dev/null 2>&1

echo "+ install htop"
apt-get -q -y install htop 1>/dev/null 2>&1

echo "+ install httpd"
apt-get -y install nginx 1>/dev/null 2>&1

echo "+ configure vhost"
rm -f /etc/nginx/sites-enabled/*
ln -sf /srv/shared/provision/httpd/default /etc/nginx/sites-enabled/shared
service nginx restart 1>/dev/null 2>&1

echo "+ install git, make, curl"
apt-get -q -y install git make curl 1>/dev/null 2>&1

echo "+ install node.js and npm"
git clone https://github.com/visionmedia/n.git /opt/n  1>/dev/null 2>&1
cd /opt/n
make install  1>/dev/null 2>&1
n 0.10  1>/dev/null 2>&1

echo "+ install required global NPM packages"
npm install -g grunt-cli 1>/dev/null 2>&1

echo "+ install supervisor"
npm install -g pm2 1>/dev/null 2>&1

echo "+ project setup"
# cd /srv/shared/client/ ; grunt build 1>/dev/null 2>&1
npm install 1>/dev/null 2>&1

echo "+ starting servers"
cd /srv/shared/server/

npm install 1>/dev/null 2>&1

pm2 start server.js
pm2 startup

su -c "chmod +x /etc/init.d/pm2-init.sh && update-rc.d pm2-init.sh defaults"

sudo service nginx restart

cd /srv/shared/
sh build.sh

exit 0
