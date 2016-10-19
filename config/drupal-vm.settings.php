<?php

$databases['default']['default'] = [
  'database' => 'interactive_figs',
  'username' => 'interactive_figs',
  'password' => 'interactive_figs',
  'prefix' => '',
  'host' => 'localhost',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
];

$settings['trusted_host_patterns'] = [
  '^interactive\-figs\.dev$',
];
