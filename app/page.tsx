import Link from 'next/link';

export default function Page() {
	return (
		<div>
			<div>Home</div>
			<div>
				<Link href="/blog">Blog Posts</Link>
				<Link href="/shows">Shows</Link>
				<Link href="/recaps">Recaps</Link>
				<Link href="/reviews">Reviews</Link>
			</div>
		</div>
	);
}
