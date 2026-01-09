// src/app/page.tsx
import {redirect} from '@/i18n/navigation';

export default function RootPage() {
  redirect({href: '/', locale: 'en'});
}import { routing } from '@/i18n/routing';