import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormWrapper from '@/components/AuthFormWrapper';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SignUpPage = () => {
  console.log('SignUpPage loaded');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Sign up form submitted');
    // In a real application, you would handle the registration logic here,
    // like making an API call and handling success/error states.
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <AuthFormWrapper
          title="Create an Account"
          description="Enter your information to get started."
          footerContent={
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/" className="font-semibold text-primary hover:underline">
                Log in
              </Link>
            </p>
          }
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="name@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" required />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </AuthFormWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;