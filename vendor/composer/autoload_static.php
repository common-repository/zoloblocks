<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit712ab97058b05af3a61ab3bdef87e3ee
{
    public static $prefixLengthsPsr4 = array (
        'Z' => 
        array (
            'Zolo\\' => 5,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Zolo\\' => 
        array (
            0 => __DIR__ . '/../..' . '/includes',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit712ab97058b05af3a61ab3bdef87e3ee::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit712ab97058b05af3a61ab3bdef87e3ee::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit712ab97058b05af3a61ab3bdef87e3ee::$classMap;

        }, null, ClassLoader::class);
    }
}