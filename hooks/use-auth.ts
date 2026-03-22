import { useMutation, useQuery } from '@tanstack/react-query';
import apiClient from '@/lib/api-client';
import { useAuthStore } from '@/store/auth-store';
import { LoginCredentials, RegisterData, User, ApiResponse } from '@/types';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useAuth = () => {
  const { setUser, setToken, logout: storeLogout } = useAuthStore();
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await apiClient.post<ApiResponse<{ user: User; token: string }>>(
        '/api/auth/login',
        credentials
      );
      return response.data.data;
    },
    onSuccess: (data) => {
      setUser(data.user);
      setToken(data.token);
      toast.success('Login successful!');
      
      // Redirect based on role
      const roleRoutes = {
        customer: '/customer/dashboard',
        driver: '/driver/dashboard',
        guide: '/guide/dashboard',
        admin: '/admin/dashboard',
      };
      router.push(roleRoutes[data.user.role]);
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Login failed');
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (data: RegisterData) => {
      const response = await apiClient.post<ApiResponse<{ user: User; token: string }>>(
        '/api/auth/register',
        data
      );
      return response.data.data;
    },
    onSuccess: (data) => {
      setUser(data.user);
      setToken(data.token);
      toast.success('Registration successful!');
      
      const roleRoutes = {
        customer: '/customer/dashboard',
        driver: '/driver/dashboard',
        guide: '/guide/dashboard',
        admin: '/admin/dashboard',
      };
      router.push(roleRoutes[data.user.role]);
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Registration failed');
    },
  });

  const logout = () => {
    storeLogout();
    toast.success('Logged out successfully');
    router.push('/login');
  };

  const { data: currentUser, isLoading } = useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const response = await apiClient.get<ApiResponse<User>>('/api/auth/me');
      return response.data.data;
    },
    enabled: !!useAuthStore.getState().token,
    retry: false,
  });

  return {
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout,
    isLoggingIn: loginMutation.isPending,
    isRegistering: registerMutation.isPending,
    currentUser,
    isLoadingUser: isLoading,
  };
};
