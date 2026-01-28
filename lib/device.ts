import { LoginData } from '@/types/auth';
import { UAParser } from 'ua-parser-js';



export const getDeviceIdentity = (): Omit<LoginData, 'email' | 'password' | 'deviceToken'> => {
  if (typeof window === 'undefined') {
    return { deviceId: '', deviceModel: '', deviceName: '' };
  }

  // 1. Get or Create persistent Device ID
  let deviceId = localStorage.getItem('app_device_id');
  if (!deviceId) {
    deviceId = crypto.randomUUID(); // Standard Web Crypto API
    localStorage.setItem('app_device_id', deviceId);
  }

  // 2. Parse Device Info from User Agent
  const parser = new UAParser();
  const result = parser.getResult();

  const deviceModel = result.device.model || result.os.name || 'Web Browser';
  const deviceName = `${result.browser.name} on ${result.os.name} ${result.os.version}`;

  return {
    deviceId,
    deviceModel,
    deviceName,
  };
};