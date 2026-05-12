import mail from '@/public/icons/mail.svg'
import phone from '@/public/icons/phone.svg'
import map from '@/public/icons/map-pin.svg'
import { kontaktBlockItems } from '@/types'

export const kontaktItems: kontaktBlockItems[] = [
	{
		id: 1,
		img: mail,
		alt: 'Ikona koperty',
		type: 'Email',
		text: 'kontakt@fovlab.pl',
	},
	{
		id: 2,
		img: phone,
		alt: 'Ikona telefonu stacjonarnego',
		type: 'Telefon',
		text: '+48 519 793 345',
	},
	{
		id: 3,
		img: map,
		alt: 'Ikona przepinki pokazującej lokalizację',
		type: 'Lokalizacja',
		text: 'Polska (Toruń) - pracuję zdalnie z każdym',
	},
]
