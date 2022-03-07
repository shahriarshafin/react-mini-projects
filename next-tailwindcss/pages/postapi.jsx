const relativeFile = () => {
	function Component() {
		var jsonData1 = {
			name: 'alan',
			age: 23,
			username: 'aturing',
		};

		var jsonData2 = {
			name: 'john',
			age: 29,
			username: '__john__',
		};

		function handleClick() {
			var formData = new FormData();
			formData.append('json1', JSON.stringify(jsonData1));
			formData.append('json2', JSON.stringify(jsonData2));

			// Send data to the backend via POST
			fetch('http://localhost:4000/botchat', {
				method: 'POST',
				mode: 'cors',
				body: formData, // body data type must match "Content-Type" header
			});
		}

		return (
			<div
				onClick={handleClick}
				style={{
					textAlign: 'center',
					width: '100px',
					border: '1px solid gray',
					borderRadius: '5px',
				}}
			>
				Send data to backend
			</div>
		);
	}

	// export { Component };

	return <div>Boom!</div>;
};

export default relativeFile;
