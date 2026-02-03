import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function openApp(appName: string): Promise<string> {
  try {
    await execAsync(`open -a "${appName}"`);
    return `Successfully opened ${appName}`;
  } catch (error) {
    return `Failed to open ${appName}: ${error}`;
  }
}

export async function screenshot(filename?: string): Promise<string> {
  const outputPath = filename || `screenshot-${Date.now()}.png`;
  try {
    await execAsync(`screencapture -x ~/Desktop/${outputPath}`);
    return `Screenshot saved to ~/Desktop/${outputPath}`;
  } catch (error) {
    return `Failed to take screenshot: ${error}`;
  }
}

export async function systemInfo(): Promise<string> {
  try {
    const [hostname, osVersion, memInfo] = await Promise.all([
      execAsync('hostname'),
      execAsync('sw_vers -productVersion'),
      execAsync('vm_stat | head -5'),
    ]);

    return `
System Information:
- Hostname: ${hostname.stdout.trim()}
- macOS Version: ${osVersion.stdout.trim()}
- Memory Stats:
${memInfo.stdout}
    `.trim();
  } catch (error) {
    return `Failed to get system info: ${error}`;
  }
}
