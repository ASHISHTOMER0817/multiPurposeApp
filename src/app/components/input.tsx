"use client";

import { useState } from "react";

export default function Input(values: string) {
	const [value, setValue] = useState(values);
	return (
		<>
			<input
				value={values}
				placeholder="University search"
				type="text"
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
		</>
	);
}
