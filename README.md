## Preparation

Ensure the you have the following installed:

- VirtualBox
- Vagrant
- Ansible
- Hostupdater (`vagrant plugin install vagrant-hostsupdater`)

## Instructions

```
$ COMPOSER=composer-setup.json composer install
$ vagrant up
```

Once it is setup, visit `http://interactive-figures.dev`.

When you make changes to the configuration you should export these and commit them to git:

```
drush @interactive-figures.dev cex -y
```

Clear cache

```
drush @interactive-figures.dev cr
```

Enabling a theme

```
drush config-set system.theme default atlas

```
