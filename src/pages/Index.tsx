import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Plane, Briefcase, Ticket, DollarSign, Settings, Users, Trophy, LogOut } from 'lucide-react';
const Index = () => {
  const navigate = useNavigate();
  const {
    logout
  } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header com botão de logout */}
        <div className="flex justify-end mb-4">
          <Button onClick={handleLogout} variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            🎰 Sistema de Sorteio
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 mb-6 drop-shadow-md">
            ✈️ Viagem dos Sonhos ✈️
          </h2>
          <div className="flex justify-center gap-4 text-white text-2xl">
            <Plane className="animate-bounce" />
            <Briefcase className="animate-bounce delay-100" />
            <Ticket className="animate-bounce delay-200" />
            <DollarSign className="animate-bounce delay-300" />
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Admin Assignment */}
          <Card className="bg-white/95 backdrop-blur-sm p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer group">
            <div className="text-center space-y-4" onClick={() => navigate('/admin')}>
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                <Settings className="w-16 h-16 mx-auto text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">🎯 Atribuir de Cupons</h3>
              <p className="text-gray-600 text-sm">
                Sistema administrativo para cadastrar participantes e atribuir números
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Acessar Admin
              </Button>
            </div>
          </Card>

          {/* Public Draw */}
          <Card className="bg-white/95 backdrop-blur-sm p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer group">
            <div className="text-center space-y-4" onClick={() => navigate('/sorteio')}>
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                <Trophy className="w-16 h-16 mx-auto text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                🎉 Sorteio Final
              </h3>
              <p className="text-gray-600 text-sm">
                Roleta pública para o sorteio final do vencedor da viagem
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Ir para Sorteio
              </Button>
            </div>
          </Card>

          {/* Participants Panel */}
          <Card className="bg-white/95 backdrop-blur-sm p-6 shadow-xl hover:shadow-2xl transition-all cursor-pointer group">
            <div className="text-center space-y-4" onClick={() => navigate('/participants')}>
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-16 h-16 mx-auto text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                📋 Painel de Participantes
              </h3>
              <p className="text-gray-600 text-sm">
                Visualizar lista completa dos participantes cadastrados
              </p>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Ver Participantes
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12 text-white/80">
          <p className="text-lg">
            🎲 Sistema completo de sorteio para promoções e eventos
          </p>
          <p className="text-sm mt-2">
            Escolha uma das opções acima para começar
          </p>
        </div>
      </div>
    </div>;
};
export default Index;