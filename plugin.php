<?php

/**
 * Plugin Name:       Team Members
 * Description:       A Team Members Grid.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ali Alaa + Ivo Francisco
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       team-members
 *
 * @package           if-blocks
 */

function if_blocks_team_members_block_init()
{
    register_block_type_from_metadata(__DIR__);
}
add_action('init', 'if_blocks_team_members_block_init');
