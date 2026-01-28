import { Lock, AlertTriangle, Shield, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Redacted = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full border-2 border-muted shadow-lg">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="mx-auto w-20 h-20 bg-muted rounded-full flex items-center justify-center">
            <Lock className="w-10 h-10 text-muted-foreground" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight">
            Private Repository
          </CardTitle>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">Access Restricted</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 text-center">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The source code for this project is <span className="font-semibold text-foreground">confidential and proprietary</span>.
            </p>
            
            <div className="bg-muted/50 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <EyeOff className="w-4 h-4 flex-shrink-0" />
                <span>This repository contains sensitive business logic and proprietary algorithms</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>Client confidentiality agreements prevent public disclosure of the codebase</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Lock className="w-4 h-4 flex-shrink-0" />
                <span>Internal security protocols require restricted access to this repository</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              For collaboration inquiries or access requests, please contact:
            </p>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full" asChild>
                <a href="/">
                  ← Back to Portfolio
                </a>
              </Button>
            </div>
          </div>

          <div className="text-xs text-muted-foreground pt-4 border-t">
            <p>
              This project was developed under strict confidentiality agreements. 
              The live demo showcases the user interface and functionality, 
              while the underlying source code remains protected.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Redacted;