import { ThemeToggle } from '../themeToggle/themeToggle';

export function Header() {
  return (
    <nav>
      <div>
        <h1>Gedachten</h1>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Signup/Login</li>
          <li>
            <ThemeToggle></ThemeToggle>
          </li>
        </ul>
      </div>
    </nav>
  );
}
