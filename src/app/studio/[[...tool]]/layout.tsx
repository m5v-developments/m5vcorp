export const metadata = {
  title: 'M5V Studio',
  description: 'Content management for M5V Developments',
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[100]">
      {children}
    </div>
  )
}
