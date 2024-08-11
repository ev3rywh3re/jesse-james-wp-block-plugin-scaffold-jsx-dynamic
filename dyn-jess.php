<?php
/**
 * Plugin Name:       Dyn Jess
 * Description:       Jess's WP block scaffolded tools Block JSX.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Jess Planck
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dyn-jess
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_dyn_jess_block_init() {
	register_block_type( __DIR__ . '/dist', array(
        'name' => 'dyn-jess/my-custom-block', // Add your plugin's namespace
    ));
}
add_action( 'init', 'create_block_dyn_jess_block_init' );
