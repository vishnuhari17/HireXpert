import ProtectedRoute from '@/components/ProtectedRoute';

export default function CandidateDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <ProtectedRoute role="candidate">
        {children}
        </ProtectedRoute>
  );
}