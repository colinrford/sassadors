function textChange(id, item)
{
	var headers = new Array();
	var contents = new Array();

	headers[0] = 'Bio';
	headers[1] = 'Chem';
	headers[2] = 'CS';
	headers[3] = 'Earth';
	headers[4] = 'Math';
	headers[5] = 'Physics';
	headers[6] = 'Stats';

	contents[0] = 'Bio is about trees and stuff';
	contents[1] = 'Chem has explosions, which is cool';
	contents[2] = 'CS is the best!';
	contents[3] = 'Earth, Atmo, and Planetary are about round things';
	contents[4] = 'Math is hard - and it fundamentally changes you';
	contents[5] = 'Physics isn\'t that phun';
	contents[6] = 'Stats have histograms and junk';

	var head;
	var content;

	switch(item) 
	{
		case "bio":
			head = headers[0];
			content = contents[0];
			document.getElementById(id).innerHTML=head;
	}
}
