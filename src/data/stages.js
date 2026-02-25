import { PlaneLanding, BedDouble, PlaneTakeoff } from 'lucide-react';

export const stages = [
    {
        id: 'pre-arrival',
        label: 'До заезда',
        subLabel: 'Pre-arrival',
        focus: 'Захват внимания',
        icon: PlaneLanding,
        description: 'Гость скачивает приложение, проходит быструю регистрацию, передает данные (что сразу обогащает CRM отеля) и начинает взаимодействие с ИИ-консьержем.',
        crmData: 'Сбор профиля: Контакты, предпочтения по номеру, аллергии, цель визита.',
        crmColor: 'text-blue-400',
        crmBorder: 'border-blue-500/30'
    },
    {
        id: 'in-stay',
        label: 'Во время проживания',
        subLabel: 'In-stay',
        focus: 'Монетизация и комфорт',
        icon: BedDouble,
        description: 'Приложение становится пультом управления отелем — заказ еды в один клик, бронирование спа, получение умных пуш-уведомлений (например, предложение столика в ресторане во время ужина).',
        crmData: 'Сбор поведения: Частота заказов, средний чек, любимые блюда, время активности.',
        crmColor: 'text-emerald-400',
        crmBorder: 'border-emerald-500/30'
    },
    {
        id: 'post-stay',
        label: 'После выезда',
        subLabel: 'Post-stay',
        focus: 'Удержание',
        icon: PlaneTakeoff,
        description: 'Приложение остается на смартфоне. Благодаря накопленным данным о предпочтениях, гость может забронировать следующую поездку в любой отель сети Roomie в один клик, создавая собственную закрытую экосистему лояльности.',
        crmData: 'Прогнозирование: LTV гостя, вероятность возврата, персональные офферы (Next Best Action).',
        crmColor: 'text-purple-400',
        crmBorder: 'border-purple-500/30'
    }
];
