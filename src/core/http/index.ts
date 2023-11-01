import axios from 'axios';
import { BASE_URL } from '@/core/constants/url'

export const api = axios.create({
  baseURL: BASE_URL,
});