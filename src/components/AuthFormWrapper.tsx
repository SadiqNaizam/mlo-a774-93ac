import * as React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface AuthFormWrapperProps {
  /** The main title for the authentication form (e.g., "Log In", "Create an Account"). */
  title: string;
  /** An optional subtitle or description displayed below the title. */
  description?: string;
  /** The main content of the form, typically input fields and a submit button. */
  children: React.ReactNode;
  /** Content for the footer, usually for links like "Forgot Password?" or "Sign Up". */
  footerContent: React.ReactNode;
}

/**
 * A reusable wrapper component that provides a consistent layout for authentication forms.
 * It uses a Card structure to house the form's title, content, and footer links.
 */
const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  title,
  description,
  children,
  footerContent,
}) => {
  console.log(`AuthFormWrapper loaded for title: ${title}`);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">{title}</CardTitle>
          {description && (
            <CardDescription className="pt-1">{description}</CardDescription>
          )}
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex flex-col items-center justify-center text-sm">
          {footerContent}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthFormWrapper;