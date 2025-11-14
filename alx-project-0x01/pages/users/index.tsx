import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
	return (
		<div className="flex flex-col h-screen">
			<Header />

			<main className="p-4">
				<h1 className="text-2xl font-bold mb-4">Users List</h1>

				<div className="grid grid-cols-3 gap-4">
					{posts.map((user: UserProps) => (
						<UserCard {...user} key={user.id} />
					))}
				</div>
			</main>
		</div>
	);
};

export async function getStaticProps() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const posts = await response.json();

	return {
		props: {
			posts,
		},
	};
}

export default Users;