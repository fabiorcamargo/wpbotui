async function sendMessageText() {
	const id = document.getElementById('idText').value;
	const messageText = document.getElementById('messageText').value;
	const payload = {
		text: [
			{
				id: id,
				messageText: messageText
			}
		]
	};
	try {
		const response = await fetch('/send-message', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});

		const result = await response.json();
		document.getElementById('modalMessage').innerText = 'Message sent successfully';
		document.getElementById('successModal').classList.remove('hidden');
	} catch (error) {
		console.error('Error sending message:', error);
		document.getElementById('modalMessage').innerText = 'Failed to send message';
		document.getElementById('successModal').classList.remove('hidden');
	}
}

async function sendMessageImages() {
	const id = document.getElementById('idImage').value;
	const url = document.getElementById('urlImage').value;
	const caption = document.getElementById('captionImage').value;
	const payload = {
		image: [
			{
				id: id,
				url: url,
				caption: caption
			}
		]
	};
	try {
		const response = await fetch('/send-message', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});

		const result = await response.json();
		document.getElementById('modalMessage').innerText = 'Message sent successfully';
		document.getElementById('successModal').classList.remove('hidden');
	} catch (error) {
		console.error('Error sending message:', error);
		document.getElementById('modalMessage').innerText = 'Failed to send message';
		document.getElementById('successModal').classList.remove('hidden');
	}
}

async function sendMessageVideos() {
	const id = document.getElementById('idVideo').value;
	const url = document.getElementById('urlVideo').value;
	const caption = document.getElementById('captionVideo').value;
	const payload = {
		video: [
			{
				id: id,
				url: url,
				caption: caption
			}
		]
	};
	try {
		const response = await fetch('/send-message', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});

		const result = await response.json();
		document.getElementById('modalMessage').innerText = 'Message sent successfully';
		document.getElementById('successModal').classList.remove('hidden');
	} catch (error) {
		console.error('Error sending message:', error);
		document.getElementById('modalMessage').innerText = 'Failed to send message';
		document.getElementById('successModal').classList.remove('hidden');
	}
}

async function sendMessageAudios() {
	const id = document.getElementById('idAudio').value;
	const url = document.getElementById('urlAudio').value;
	const caption = document.getElementById('captionAudio').value;
	const payload = {
		audio: [
			{
				id: id,
				url: url,
				caption: caption
			}
		]
	};
	try {
		const response = await fetch('/send-message', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});

		const result = await response.json();
		document.getElementById('modalMessage').innerText = 'Message sent successfully';
		document.getElementById('successModal').classList.remove('hidden');
	} catch (error) {
		console.error('Error sending message:', error);
		document.getElementById('modalMessage').innerText = 'Failed to send message';
		document.getElementById('successModal').classList.remove('hidden');
	}
}

async function sendMessageLocation() {
	const id = document.getElementById('idLocation').value;
	const latitude = document.getElementById('latitude').value;
	const longitude = document.getElementById('longitude').value;
	const payload = {
		location: [
			{
				id: id,
				latitude: latitude,
				longitude: longitude
			}
		]
	};
	try {
		const response = await fetch('/send-message', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payload)
		});

		const result = await response.json();
		document.getElementById('modalMessage').innerText = 'Message sent successfully';
		document.getElementById('successModal').classList.remove('hidden');
	} catch (error) {
		console.error('Error sending message:', error);
		document.getElementById('modalMessage').innerText = 'Failed to send message';
		document.getElementById('successModal').classList.remove('hidden');
	}
}

function closeModal() {
	document.getElementById('successModal').classList.add('hidden');
}