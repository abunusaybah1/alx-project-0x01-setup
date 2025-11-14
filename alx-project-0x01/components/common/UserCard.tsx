import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
	name,
	username,
	email,
	phone,
	website,
	address,
	company,
}) => {
	return (
		<div className="p-4 border rounded-md shadow-sm bg-white">
			<h2 className="text-lg font-semibold">{name}</h2>
			<p className="text-gray-600">@{username}</p>

			<div className="mt-2 text-sm">
				<p>
					<strong>Email:</strong> {email}
				</p>
				<p>
					<strong>Phone:</strong> {phone}
				</p>
				<p>
					<strong>Website:</strong> {website}
				</p>
			</div>

			<div className="mt-3 text-sm">
				<p>
					<strong>Company:</strong> {company.name}
				</p>
				<p>
					<strong>Catchphrase:</strong> {company.catchPhrase}
				</p>
			</div>

			<div className="mt-3 text-sm">
				<p className="font-semibold">Address:</p>
				<p>
					{address.street}, {address.suite}
				</p>
				<p>
					{address.city} {address.zipcode}
				</p>
			</div>
		</div>
	);
};

export default UserCard;


