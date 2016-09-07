# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
    config.vm.provider "virtualbox" do |v|
      v.memory = 1536
    end

    config.vm.box = "ubuntu/trusty64"
    config.vm.network "private_network", ip: "192.168.33.61"
    config.vm.synced_folder ".", "/var/src", :mount_options => ["dmode=777", "fmode=666"]
end