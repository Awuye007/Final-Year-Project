import React from "react";

const Counsellors = () => {
	return (
		<div className="w-full flex flex-wrap gap-5 overflow-y-auto pb-24">
			{Array(10)
				.fill(0)
				.map((_, index) => (
					<div
						className="h-60 bg-grey rounded-3xl p-5 w-[30%] flex flex-col items-center gap-3 justify-center"
						key={index}
					>
						<h5 className="text-white font-medium text-2xl mb-2">
							Jeffery Awuye
						</h5>
						<p className="text-slate-300 mb-2">Fluent in Ga & Twi</p>
						<p className="text-muted text-sm">0507764226</p>
					</div>
				))}
		</div>
	);
};

export default Counsellors;
