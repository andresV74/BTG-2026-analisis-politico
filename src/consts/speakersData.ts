import SpeakerImage1 from "@/assets/img--armando-montenegro.webp";
import SpeakerImage2 from "@/assets/img--mauricio-reina.webp";
import SpeakerImage3 from "@/assets/img--juliana-ocampo.webp";
import Card_1 from "@/content/speaker1.astro";
import Card_2 from "@/content/speaker2.astro";
import Card_3 from "@/content/speaker3.astro";

interface SpeakersData {
	title?: string;
	name: string;
	position: string;
	image: ImageMetadata;
	imageWidth: string;
	content: any;
	id: string;
}

export const speakersData: SpeakersData[] = [
	{
		title: 'Moderado por:',
		name: 'Armando\nMontenegro',
		position: 'Chairman - BTG Pactual',
		image: SpeakerImage1,
		imageWidth:'w-104.5',
		content: Card_1,
		id: 'speaker-1',
	},
	{
		title: 'Invitados:',
		name: 'Mauricio\nReina',
		position: 'Economista y Analista, Investigador Asociado a Fedesarrollo',
		image: SpeakerImage2,
		imageWidth: 'w-93',
		content: Card_2,
		id: 'speaker-2',
	},
	{
		name: 'Juliana\nOcampo',
		position: 'Socia – Directora Orza Relacionamiento Estratégico SAS',
		image: SpeakerImage3,
		imageWidth: 'w-93',
		content: Card_3,
		id: 'speaker-3',
	}
]