import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

// Custom Components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AuthFormWrapper from '../components/AuthFormWrapper';

// Shadcn UI Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const ForgotPasswordPage = () => {
  console.log('ForgotPasswordPage loaded');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    console.log('Password reset requested for email:', email);

    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const footerContent = (
    <p>
      Remember your password?{' '}
      <Link to="/" className="font-semibold text-primary hover:underline">
        Log In
      </Link>
    </p>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <AuthFormWrapper
          title="Forgot Your Password?"
          description="Enter your email below and we'll send you a link to reset it."
          footerContent={footerContent}
        >
          {isSubmitted ? (
            <Alert variant="default">
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Request Sent!</AlertTitle>
              <AlertDescription>
                If an account with that email exists, we've sent a password reset link to it. Please check your inbox.
              </AlertDescription>
            </Alert>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </form>
          )}
        </AuthFormWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPasswordPage;