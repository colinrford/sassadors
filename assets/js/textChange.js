textChange(subject_text, std);

function textChange(id, item)
{
    document.getElementById(id).innerHTML="WORKING!";

	var headers = new Array();
	var contents = new Array();

	headers[0] = 'Bio';
	headers[1] = 'Chem';
	headers[2] = 'CS';
	headers[3] = 'Earth';
	headers[4] = 'Math';
	headers[5] = 'Physics';
	headers[6] = 'Stats';
    headers[7] = 'Other';

	contents[0] = 'Bio is about trees and stuff';
	contents[1] = 'Chem has explosions, which is cool';
	contents[2] = 'CS is the best!';
	contents[3] = 'Earth, Atmo, and Planetary are about round things';
	contents[4] = 'Math is hard - and it fundamentally changes you';
	contents[5] = "Physics isn\'t that phun";
	contents[6] = 'Stats have histograms and junk';
    contents[7] = 'Other';

	var head;
	var content;

	switch(item) 
	{
		case "bio":
			head = headers[0];
			content = contents[0];
			document.getElementById(id).innerHTML = "TESTING BITCH!";
            break;
        case "chem":
            head = headers[1];
            content = contents[1];
            document.getElementById(id).innerHTML = head;
            break;
        case "cs":
            head = headers[2];
            content = contents[2];
            document.getElementById(id).innerHTML = head;
            break;
        case "earth":
            head = headers[3];
            content = contents[3];
            document.getElementById(id).innerHTML = head;
            break;
        case "math":
            head = headers[4];
            content = contents[4];
            document.getElementById(id).innerHTML = head;
            break;
        case "physics":
            head = headers[5];
            content = contents[5];
            document.getElementById(id).innerHTML = head;
            break;
        case "stats":
            head = headers[6];
            content = contents[6];
            document.getElementById(id).innerHTML = head;
            break;
        default:
            head = headers[7];
            content = contents[7];
            document.getElementById(id).innerHTML = head;
            break;
	}
}
