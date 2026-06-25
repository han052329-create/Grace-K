/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  category: 'Cut' | 'Perm' | 'Color' | 'Clinic' | 'Scalp';
  name: string;
  description: string;
  price: number;
  duration: string; // e.g. "1h 30m"
  imageUrl: string;
}

export interface Review {
  id: string;
  rating: number;
  content: string;
  author: string;
  date: string;
  imageUrl?: string;
}

export interface Booking {
  id: string;
  customerName: string;
  customerPhone: string;
  serviceId: string;
  serviceName: string;
  price: number;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  status: 'pending' | 'confirmed' | 'cancelled';
  notes?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
