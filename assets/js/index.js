// nav bar fixed
window.onscroll = function () {
	const navBar = document.getElementById('navBar');
	const fixed = navBar.offsetTop;

	if (window.pageYOffset > fixed) {
		navBar.classList.add('navBarFixed');
	} else {
		navBar.classList.remove('navBarFixed');
	}
};

// humberger
const humberger = document.getElementById('humberger');
const navList = document.querySelector('.nav-list');
humberger.addEventListener('click', function () {
	navList.classList.toggle('active');
});

document.addEventListener('click', function (e) {
	if (!humberger.contains(e.target) && !navList.contains(e.target)) {
		navList.classList.remove('active');
	}
});

// on/of button portfolio
const buttons = document.querySelectorAll('.btn-tab');
const contents = document.querySelectorAll('.img-content');

buttons.forEach(button => {
	button.addEventListener('click', function () {
		buttons.forEach(btn => btn.classList.remove('active'));
		contents.forEach(content => content.classList.remove('active'));

		button.classList.add('active');

		const dataTarget = button.getAttribute('data-target');
		document.getElementById(dataTarget).classList.add('active');
	});
});

// hover icon skills
const card = document.querySelectorAll('.card-skills');

card.forEach(addStyle => {
	addStyle.addEventListener('mouseenter', function () {
		addStyle.style.backgroundColor = 'rgba(245, 196, 71, 0.116)';

		const iconSkills = addStyle.querySelectorAll('.svg-skills');
		iconSkills.forEach(icons => {
			icons.style.transform = 'scale(1.3, 1.3)';
			icons.style.transition = 'all 0.3s ease-in-out';
		});

		const titles = addStyle.querySelectorAll('.title');
		titles.forEach(judul => {
			judul.style.color = '#f5c447';
			judul.style.transform = 'scale(1.2, 1.2)';
			judul.style.transition = 'all 0.3s ease-in-out';
			judul.style.fontWeight = '480';
		});
	});

	addStyle.addEventListener('mouseleave', function () {
		addStyle.style.backgroundColor = 'transparent';

		const iconSkills = addStyle.querySelectorAll('.svg-skills');
		iconSkills.forEach(icons => {
			icons.style.transform = 'scale(1)';
		});

		const titles = addStyle.querySelectorAll('.title');
		titles.forEach(judul => {
			judul.style.color = '#ffffff';
			judul.style.transform = 'scale(1)';
			judul.style.fontWeight = 'normal';
		});
	});
});

// kontent komentar start
document.addEventListener('DOMContentLoaded', function () {
	const formSubmitComment = document.getElementById('submitForm');

	formSubmitComment.addEventListener('submit', function (event) {
		event.preventDefault();
		addComment();
		event.target.reset();
	});

	const submitMessageContact = document.getElementById('formContact');

	submitMessageContact.addEventListener('submit', function (e) {
		e.preventDefault();
		addAlertToUser();
		e.target.reset();
	});
});

const addListComment = [];
const RENDER_EVENT = 'render-comment';

// fungsi menambah koment
function addComment() {
	const username = document.getElementById('nameComments').value;
	const commentUser = document.getElementById('messageComments').value;

	if (username.trim() === '' || commentUser.trim() === '') {
		alert(
			'mohon masukkan usrname anda serta komen yang ingin anda kirimkan'
		);
		return;
	}

	const generatedId = generateId();
	const commentObject = generateCommentObject(
		generatedId,
		username,
		commentUser,
		false
	);

	addListComment.push(commentObject);
	document.dispatchEvent(new Event(RENDER_EVENT));
}

function generateId() {
	return +new Date();
}

function generateCommentObject(id, username, comment, status) {
	return {
		id,
		username,
		comment,
		status
	};
}

document.addEventListener(RENDER_EVENT, function () {
	const listCardComment = document.getElementById('styleCardComment');
	listCardComment.innerHTML = '';

	for (const commentItem of addListComment) {
		const commentElemet = makeComment(commentItem);
		listCardComment.append(commentElemet);
	}

});

function makeComment(commentObject) {
	const tamplate = document.getElementById('commentTamplate');

	const clone = tamplate.content.cloneNode(true);

	clone.querySelector('.username').innerText = commentObject.username;

	clone.querySelector('.comment-text').innerText = commentObject.comment;

	return clone;
}

function addAlertToUser() {
	const name = document.getElementById('nameContact').value;
	const email = document.getElementById('emailContact').value;
	const message = document.getElementById('messageContact').value;

	if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
		alert('Mohon isi form diatas secara lengkap untuk mengirimkan pesan');
		return;
	} else {
		alert(
			`Terimakasih ${name} atas pesan yang Anda kirimkan.Saat ini pesan yang Anda kirim belum belum bisa terbaca oleh admin karena fitur backend belum tersedia.`
		);
	}
}

// link to instagram
document.getElementById('goToInstagram').addEventListener('click', function () {
	window.open(
		'https://www.instagram.com/_faalll__?igsh=MXY5emZ4aGhnemgwdw==',
		'_blank'
	);
});

// link to whatsapp
document.getElementById('goToGitHub').addEventListener('click', function () {
	window.open(
		'https://github.com/Rifal-code',
		'_blank'
	);
});


// link to TikTok
document.getElementById('goToTiktok').addEventListener('click', function () {
	window.open(
		'https://www.tiktok.com/@rifal.webdev?_t=ZS-8ySsv3qQfL6&_r=1',
		'_blank'
	);
});
