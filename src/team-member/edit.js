import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { isBlobURL } from '@wordpress/blob';
import { Spinner } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
	const { name, bio, url, alt } = attributes;

	const onChangeName = (newName) => {
		setAttributes({ name: newName });
	};

	const onChangeBio = (newBio) => {
		setAttributes({ bio: newBio });
	};

	const onSelectImage = (image) => {
		if (!image || !image.url) {
			setAttributes({ url: undefined, id: undefined, alt: undefined });
			return;
		}
		setAttributes({ url: image.url, id: image.id, alt: image.alt });
	};

	return (
		<div {...useBlockProps()}>
			{url && (
				<div
					className={`wp-block-if-blocks-team-member-img${
						isBlobURL(url) ? ' is-loading' : ''
					}`}
				>
					<img src={url} alt={alt} />
					{isBlobURL(url) && <Spinner />}
				</div>
			)}

			<MediaPlaceholder
				icon={'admin-users'}
				onSelect={onSelectImage}
				onSelectURL={(val) => console.log(val)}
				onError={(error) => console.log(error)}
				accept="image/*"
				allowedTypes={['image']}
				disableMediaButtons={url}
			/>

			<RichText
				placeholder={__('Member Name', 'team-members')}
				tagName="h4"
				value={name}
				onChange={onChangeName}
				allowedFormats={[]}
			/>
			<RichText
				placeholder={__('Member Bio', 'team-members')}
				tagName="p"
				value={bio}
				onChange={onChangeBio}
				allowedFormats={[]}
			/>
		</div>
	);
}
