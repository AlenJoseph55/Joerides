export const metadata = {
  title: 'Admin',
  description: 'Admin Panel of Joerides',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
