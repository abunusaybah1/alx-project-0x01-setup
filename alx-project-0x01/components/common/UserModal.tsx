import { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
	const [user, setUser] = useState<UserData>({
		id: 0,
		name: "",
		username: "",
		email: "",
		phone: "",
		website: "",
		address: {
			street: "",
			suite: "",
			city: "",
			zipcode: "",
			geo: {
				lat: "",
				lng: "",
			},
		},
		company: {
			name: "",
			catchPhrase: "",
			bs: "",
		},
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		if (name.includes(".")) {
			const [key] = name.split(".");
			setUser((prev) => ({
				...prev,
				[key]: value,
			}));
			return;
		}

		setUser((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(user);
		onClose();
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
			{/* MODAL WRAPPER (responsive, scrollable) */}
			<div
				className="
        bg-white rounded-lg shadow-lg 
        w-full max-w-lg 
        max-h-[90vh] 
        overflow-y-auto 
        p-6
      ">
				<h2 className="text-2xl font-bold mb-6 text-gray-800">Add New User</h2>

				<form onSubmit={handleSubmit}>
					{/* NAME */}
					<div className="mb-4">
						<label className="block text-gray-700 mb-2 font-medium">
							Full Name
						</label>
						<input
							type="text"
							name="name"
							value={user.name}
							onChange={handleChange}
							className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
							placeholder="Enter name"
						/>
					</div>

					{/* USERNAME */}
					<div className="mb-4">
						<label className="block text-gray-700 mb-2 font-medium">
							Username
						</label>
						<input
							type="text"
							name="username"
							value={user.username}
							onChange={handleChange}
							className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
							placeholder="Enter username"
						/>
					</div>

					{/* EMAIL */}
					<div className="mb-4">
						<label className="block text-gray-700 mb-2 font-medium">
							Email
						</label>
						<input
							type="email"
							name="email"
							value={user.email}
							onChange={handleChange}
							className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
							placeholder="Enter email"
						/>
					</div>

					{/* PHONE + WEBSITE */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
						<div>
							<label className="block text-gray-700 mb-2 font-medium">
								Phone
							</label>
							<input
								type="text"
								name="phone"
								value={user.phone}
								onChange={handleChange}
								className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
								placeholder="Phone number"
							/>
						</div>

						<div>
							<label className="block text-gray-700 mb-2 font-medium">
								Website
							</label>
							<input
								type="text"
								name="website"
								value={user.website}
								onChange={handleChange}
								className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600"
								placeholder="Website"
							/>
						</div>
					</div>

					{/* ADDRESS */}
					<h3 className="font-semibold mb-2 text-gray-700">Address</h3>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
						<input
							type="text"
							name="address.street"
							value={user.address.street}
							onChange={handleChange}
							className="w-full border rounded-lg px-4 py-2"
							placeholder="Street"
						/>

						<input
							type="text"
							name="address.suite"
							value={user.address.suite}
							onChange={handleChange}
							className="w-full border rounded-lg px-4 py-2"
							placeholder="Suite"
						/>

						<input
							type="text"
							name="address.city"
							value={user.address.city}
							onChange={handleChange}
							className="w-full border rounded-lg px-4 py-2"
							placeholder="City"
						/>

						<input
							type="text"
							name="address.zipcode"
							value={user.address.zipcode}
							onChange={handleChange}
							className="w-full border rounded-lg px-4 py-2"
							placeholder="Zipcode"
						/>
					</div>

					{/* COMPANY */}
					<h3 className="font-semibold mb-2 text-gray-700">Company</h3>

					<div className="mb-4">
						<input
							type="text"
							name="company.name"
							value={user.company.name}
							onChange={handleChange}
							className="w-full border rounded-lg px-4 py-2"
							placeholder="Company Name"
						/>
					</div>

					<div className="mb-4">
						<input
							type="text"
							name="company.catchPhrase"
							value={user.company.catchPhrase}
							onChange={handleChange}
							className="w-full border rounded-lg px-4 py-2"
							placeholder="Catch Phrase"
						/>
					</div>

					<div className="mb-6">
						<input
							type="text"
							name="company.bs"
							value={user.company.bs}
							onChange={handleChange}
							className="w-full border rounded-lg px-4 py-2"
							placeholder="Business Slogan"
						/>
					</div>

					{/* BUTTONS */}
					<div className="flex justify-between mt-4">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 text-gray-700 hover:text-black">
							Cancel
						</button>

						<button
							type="submit"
							className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">
							Add User
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserModal;
