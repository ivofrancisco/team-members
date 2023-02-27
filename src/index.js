import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('if-blocks/block', {
	edit: Edit,
	save,
});