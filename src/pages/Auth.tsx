import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Mail, Lock, User } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [isRecovery, setIsRecovery] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  useEffect(() => {
    // Check for recovery or confirmation tokens in URL
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get('access_token');
    const type = hashParams.get('type');
    
    if (type === 'recovery' && accessToken) {
      setIsPasswordReset(true);
      setIsLogin(false);
      setIsRecovery(false);
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session && !isPasswordReset) {
        navigate('/');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, isPasswordReset]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isPasswordReset) {
        if (password !== confirmPassword) {
          throw new Error('Las contraseñas no coinciden');
        }
        if (password.length < 6) {
          throw new Error('La contraseña debe tener al menos 6 caracteres');
        }

        const { error } = await supabase.auth.updateUser({
          password: password
        });

        if (error) throw error;

        toast({
          title: "¡Contraseña actualizada!",
          description: "Tu contraseña ha sido cambiada exitosamente.",
        });
        
        // Redirect to home after successful password reset
        navigate('/');
      } else if (isRecovery) {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/auth`,
        });

        if (error) throw error;

        toast({
          title: "Email enviado",
          description: "Revisa tu email para restablecer tu contraseña. Si no lo ves, revisa tu carpeta de spam.",
        });
        setIsRecovery(false);
        setIsLogin(true);
      } else if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;
        
        toast({
          title: "¡Bienvenido!",
          description: "Has iniciado sesión correctamente.",
        });
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/auth`,
            data: {
              name: name,
            }
          }
        });

        if (error) throw error;

        toast({
          title: "¡Registro exitoso!",
          description: "Por favor verifica tu email para completar el registro. Si no lo ves, revisa tu carpeta de spam.",
        });
        
        // Cambiar a modo login después del registro exitoso
        setIsLogin(true);
        setName('');
        setPassword('');
      }
    } catch (error: any) {
      let errorMessage = "Ha ocurrido un error inesperado.";
      
      if (error.message?.includes('Invalid login credentials')) {
        errorMessage = "Credenciales incorrectas. Verifica tu email y contraseña.";
      } else if (error.message?.includes('User already registered')) {
        errorMessage = "Este email ya está registrado. Intenta iniciar sesión.";
      } else if (error.message?.includes('Email not confirmed')) {
        errorMessage = "Por favor confirma tu email antes de iniciar sesión.";
      } else if (error.message) {
        errorMessage = error.message;
      }

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{isLogin ? 'Iniciar Sesión' : 'Registro'} | Encryptora</title>
        <meta name="description" content="Accede a tu cuenta de Encryptora o regístrate para gestionar tus servicios de ciberseguridad." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold mb-2">
                  {isPasswordReset ? 'Cambiar Contraseña' : isRecovery ? 'Recuperar Contraseña' : isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                </h1>
                <p className="text-muted-foreground">
                  {isPasswordReset ? 'Ingresa tu nueva contraseña' : isRecovery ? 'Ingresa tu email para recuperar tu contraseña' : isLogin ? 'Accede a tu panel de ciberseguridad' : 'Regístrate para gestionar tus servicios'}
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>
                    {isPasswordReset ? 'Nueva contraseña' : isRecovery ? 'Recuperar contraseña' : isLogin ? 'Bienvenido de nuevo' : 'Crear nueva cuenta'}
                  </CardTitle>
                  <CardDescription>
                    {isPasswordReset ? 'Crea una nueva contraseña segura para tu cuenta' : isRecovery ? 'Te enviaremos un enlace para restablecer tu contraseña' : isLogin ? 'Ingresa tus credenciales para continuar' : 'Completa los datos para registrarte'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAuth} className="space-y-4">
                    {!isLogin && !isRecovery && !isPasswordReset && (
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre completo</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="Tu nombre completo"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="pl-10"
                            required={!isLogin && !isRecovery && !isPasswordReset}
                          />
                        </div>
                      </div>
                    )}
                    
                    {!isPasswordReset && (
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="tu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10"
                            required={!isPasswordReset}
                          />
                        </div>
                      </div>
                    )}
                    
                    {!isRecovery && (
                      <div className="space-y-2">
                        <Label htmlFor="password">
                          {isPasswordReset ? 'Nueva contraseña' : 'Contraseña'}
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="password"
                            type="password"
                            placeholder={isPasswordReset ? "Ingresa tu nueva contraseña" : "Tu contraseña"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10"
                            required
                            minLength={6}
                          />
                        </div>
                        {isPasswordReset && (
                          <p className="text-xs text-muted-foreground">
                            Mínimo 6 caracteres
                          </p>
                        )}
                      </div>
                    )}

                    {isPasswordReset && (
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirma tu nueva contraseña"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:opacity-90"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Procesando...' : isPasswordReset ? 'Cambiar Contraseña' : isRecovery ? 'Enviar Email' : isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                    </Button>
                  </form>

                  <div className="mt-6 text-center space-y-2">
                    {!isRecovery && !isPasswordReset && (
                      <>
                        <button
                          type="button"
                          onClick={() => {
                            setIsLogin(!isLogin);
                            setName('');
                            setEmail('');
                            setPassword('');
                            setConfirmPassword('');
                          }}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block w-full"
                        >
                          {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
                        </button>
                        {isLogin && (
                          <button
                            type="button"
                            onClick={() => {
                              setIsRecovery(true);
                              setPassword('');
                              setConfirmPassword('');
                            }}
                            className="text-sm text-electric-blue hover:text-electric-blue/80 transition-colors"
                          >
                            ¿Olvidaste tu contraseña?
                          </button>
                        )}
                      </>
                    )}
                    {isRecovery && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsRecovery(false);
                          setEmail('');
                          setPassword('');
                          setConfirmPassword('');
                        }}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Volver al inicio de sesión
                      </button>
                    )}
                    {isPasswordReset && (
                      <div className="text-sm text-muted-foreground">
                        Cambiarás tu contraseña y serás redirigido al inicio
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Auth;