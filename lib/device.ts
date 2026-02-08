import { LoginData } from '@/types/auth';
import { UAParser } from 'ua-parser-js';



export const getDeviceIdentity = (): Omit<LoginData, 'email' | 'password' | 'deviceToken' | 'deviceId'> => {
  if (typeof window === 'undefined') {
    return { deviceModel: '', deviceName: '' };
  }

  //  Parse Device Info from User Agent
  const parser = new UAParser();
  const result = parser.getResult();

  const deviceModel = result.device.model || result.os.name || 'Web Browser';
  const deviceName = `${result.browser.name} on ${result.os.name} ${result.os.version}`;

  return {
    deviceModel,
    deviceName,
  };
};