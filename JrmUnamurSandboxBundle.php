<?php
/**
 * Created by PhpStorm.
 * User: jmeuriss
 * Date: 3/02/14
 * Time: 15:09
 */

namespace JrmUnamur\SandboxBundle;

use Claroline\CoreBundle\Library\PluginBundle;
use Claroline\KernelBundle\Bundle\ConfigurationBuilder;

/*
 * Bundle class
 */
class JrmUnamurSandboxBundle
{
    public function getConfiguration($environment)
    {
        $config = new ConfigurationBuilder();

        return $config->addRoutingResource(__DIR__ . '/Resources/config/routing.yml', null, 'jrm-unamur-cobra');
    }
}