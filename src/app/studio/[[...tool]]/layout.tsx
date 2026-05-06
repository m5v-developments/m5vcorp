export const metadata = {
  title: 'M5V Studio',
  description: 'Content management for M5V Developments',
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
