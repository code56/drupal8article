## Preparation

Ensure the you have the following installed:

- VirtualBox
- Vagrant
- Ansible
- Hostupdater (`vagrant plugin install vagrant-hostsupdater`)

## Instructions

```
$ composer install
$ vagrant up
```

Once it is setup, visit `http://interactive-figures.dev`.

When you make changes to the configuration you should export these and commit them to git:

```
drush @interactive-figures.dev cex -y
```
