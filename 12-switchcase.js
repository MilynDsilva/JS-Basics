let role= 'moderator';

switch (role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('Guest moderator');
        break;
    default:
        console.log('Unknown role');
}

// if (role === 'guest') console.log('Guest');
// else if (role === 'moderator') console.log('moderator');
// else console.log('Unknown')