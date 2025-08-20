"use client";
import React, { useState } from 'react';
import { Home, Car, Plane, Building2, MapPin, Volume2, ChevronLeft } from 'lucide-react';

const RightsAudioApp = () => {
  const [currentScenario, setCurrentScenario] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);

  const scenarios = [
    {
      id: 'home',
      title: 'En Casa',
      icon: Home,
      color: 'bg-blue-500',
      rights: [
        {
          text: "I do not consent to you entering my home. You need a warrant signed by a judge.",
          spanish: "No consiento que entren a mi casa. Necesitan una orden firmada por un juez.",
          audioFile: "/audio/home/home-no-consent-entry.mp3"
        },
        {
          text: "I am exercising my right to remain silent. I want to speak to a lawyer.",
          spanish: "Estoy ejerciendo mi derecho a permanecer en silencio. Quiero hablar con un abogado.",
          audioFile: "/audio/home/home-remain-silent-lawyer.mp3"
        },
        {
          text: "You cannot search my home without a warrant. I do not consent to any search.",
          spanish: "No pueden registrar mi casa sin una orden. No consiento ningún registro.",
          audioFile: "/audio/home/home-no-search-warrant.mp3"
        },
        {
          text: "I have children here who are U.S. citizens. They need to stay with a guardian.",
          spanish: "Tengo niños aquí que son ciudadanos estadounidenses. Necesitan quedarse con un tutor.",
          audioFile: "/audio/home/home-children-citizens-guardian.mp3"
        },
        {
          text: "Show me a warrant signed by a judge, not an ICE administrative form.",
          spanish: "Muéstrenme una orden firmada por un juez, no un formulario administrativo de ICE.",
          audioFile: "/audio/home/home-judicial-warrant-not-ice.mp3"
        }
      ]
    },
    {
      id: 'work',
      title: 'En el Trabajo',
      icon: Building2,
      color: 'bg-green-500',
      rights: [
        {
          text: "I am exercising my right to remain silent. I want to speak to a lawyer.",
          spanish: "Estoy ejerciendo mi derecho a permanecer en silencio. Quiero hablar con un abogado.",
          audioFile: "/audio/work/work-remain-silent-lawyer.mp3"
        },
        {
          text: "I do not consent to any search of my person or belongings.",
          spanish: "No consiento ningún registro de mi persona o pertenencias.",
          audioFile: "/audio/work/work-no-search-person.mp3"
        },
        {
          text: "I need to call my family to arrange care for my children.",
          spanish: "Necesito llamar a mi familia para organizar el cuidado de mis hijos.",
          audioFile: "/audio/work/work-call-family-children.mp3"
        },
        {
          text: "I have a medical condition and need my medication.",
          spanish: "Tengo una condición médica y necesito mi medicamento.",
          audioFile: "/audio/work/work-medical-condition-medication.mp3"
        },
        {
          text: "You must have a judicial warrant to arrest me here.",
          spanish: "Deben tener una orden judicial para arrestarme aquí.",
          audioFile: "/audio/work/work-judicial-warrant-arrest.mp3"
        }
      ]
    },
    {
      id: 'airport',
      title: 'Aeropuerto/Frontera',
      icon: Plane,
      color: 'bg-purple-500',
      rights: [
        {
          text: "I am exercising my right to remain silent beyond providing required identification.",
          spanish: "Estoy ejerciendo mi derecho a permanecer en silencio más allá de proporcionar identificación requerida.",
          audioFile: "/audio/airport/airport-remain-silent-identification.mp3"
        },
        {
          text: "I do not consent to a search of my luggage or electronic devices.",
          spanish: "No consiento el registro de mi equipaje o dispositivos electrónicos.",
          audioFile: "/audio/airport/airport-no-search-luggage-devices.mp3"
        },
        {
          text: "I want to speak to a lawyer before answering any questions.",
          spanish: "Quiero hablar con un abogado antes de responder cualquier pregunta.",
          audioFile: "/audio/airport/airport-lawyer-before-questions.mp3"
        },
        {
          text: "I am pregnant and need medical attention.",
          spanish: "Estoy embarazada y necesito atención médica.",
          audioFile: "/audio/airport/airport-pregnant-medical-attention.mp3"
        },
        {
          text: "I need to contact my family about my detention.",
          spanish: "Necesito contactar a mi familia sobre mi detención.",
          audioFile: "/audio/airport/airport-contact-family-detention.mp3"
        }
      ]
    },
    {
      id: 'traffic-stop',
      title: 'Parada de Tráfico',
      icon: Car,
      color: 'bg-red-500',
      rights: [
        {
          text: "I am exercising my right to remain silent. I want to speak to a lawyer.",
          spanish: "Estoy ejerciendo mi derecho a permanecer en silencio. Quiero hablar con un abogado.",
          audioFile: "/audio/traffic-stop/traffic-remain-silent-lawyer.mp3"
        },
        {
          text: "I do not consent to a search of my vehicle.",
          spanish: "No consiento el registro de mi vehículo.",
          audioFile: "/audio/traffic-stop/traffic-no-search-vehicle.mp3"
        },
        {
          text: "You cannot break my window without a judicial warrant or probable cause.",
          spanish: "No pueden romper mi ventana sin una orden judicial o causa probable.",
          audioFile: "/audio/traffic-stop/traffic-cannot-break-window.mp3"
        },
        {
          text: "You do not have probable cause to detain me.",
          spanish: "No tienen causa probable para detenerme.",
          audioFile: "/audio/traffic-stop/traffic-no-probable-cause.mp3"
        },
        {
          text: "Am I free to go?",
          spanish: "¿Soy libre de irme?",
          audioFile: "/audio/traffic-stop/traffic-am-i-free-to-go.mp3"
        },
        {
          text: "I am recording this interaction for my safety.",
          spanish: "Estoy grabando esta interacción por mi seguridad.",
          audioFile: "/audio/traffic-stop/traffic-recording-interaction.mp3"
        },
        {
          text: "Any use of force must be reasonable under the Fourth Amendment.",
          spanish: "Cualquier uso de fuerza debe ser razonable bajo la Cuarta Enmienda.",
          audioFile: "/audio/traffic-stop/traffic-reasonable-force-fourth-amendment.mp3"
        }
      ]
    },
    {
      id: 'public-space',
      title: 'Espacio Público',
      icon: MapPin,
      color: 'bg-orange-500',
      rights: [
        {
          text: "I am exercising my right to remain silent. I want to speak to a lawyer.",
          spanish: "Estoy ejerciendo mi derecho a permanecer en silencio. Quiero hablar con un abogado.",
          audioFile: "/audio/public-space/public-remain-silent-lawyer.mp3"
        },
        {
          text: "I do not consent to any search.",
          spanish: "No consiento ningún registro.",
          audioFile: "/audio/public-space/public-no-consent-search.mp3"
        },
        {
          text: "You cannot stop me without reasonable suspicion of a crime.",
          spanish: "No pueden detenerme sin sospecha razonable de un crimen.",
          audioFile: "/audio/public-space/public-reasonable-suspicion-crime.mp3"
        },
        {
          text: "Am I being detained or am I free to go?",
          spanish: "¿Estoy siendo detenido o soy libre de irme?",
          audioFile: "/audio/public-space/public-detained-or-free.mp3"
        },
        {
          text: "I am recording this interaction for my safety.",
          spanish: "Estoy grabando esta interacción por mi seguridad.",
          audioFile: "/audio/public-space/public-recording-interaction.mp3"
        }
      ]
    }
  ];

  const playAudio = (audioFile) => {
    try {
      // Stop any currently playing audio
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      // Stop any ongoing speech synthesis
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }

      const audio = new Audio(audioFile);
      setCurrentAudio(audio);

      // Clear current audio when it ends
      audio.addEventListener('ended', () => {
        setCurrentAudio(null);
      });

      audio.play().catch(error => {
        console.error('Error playing audio:', error);
        setCurrentAudio(null);
        // Fallback to text-to-speech if audio file fails
        fallbackToTTS(audioFile);
      });
    } catch (error) {
      console.error('Error creating audio:', error);
      setCurrentAudio(null);
      // Fallback to text-to-speech if audio file fails
      fallbackToTTS(audioFile);
    }
  };

  const fallbackToTTS = (audioFile) => {
    // Extract the text from the current scenario and right based on the audio file
    const scenario = scenarios.find(s => s.id === currentScenario);
    if (scenario) {
      const right = scenario.rights.find(r => r.audioFile === audioFile);
      if (right) {
        speakText(right.text);
      }
    }
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8; // Slightly slower for clarity
      utterance.volume = 1;
      utterance.lang = 'en-US';
      
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Síntesis de voz no compatible en este navegador');
    }
  };

  const handleBackToScenarios = () => {
    // Stop any currently playing audio when going back
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setCurrentAudio(null);
    }

    // Stop any ongoing speech synthesis
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    setCurrentScenario(null);
  };

  if (currentScenario) {
    const scenario = scenarios.find(s => s.id === currentScenario);
    
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Emergency Hotline Banner */}
        <div className="bg-red-600 text-white text-center py-3 px-4">
          <p className="font-bold text-sm">
            Línea Directa Coalición de Autodefensa Comunitaria & Union del Barrio
          </p>
          <a href="tel:2134446562" className="text-lg font-bold hover:underline">
            (213) 444-6562
          </a>
        </div>

        {/* Header */}
        <div className={`${scenario.color} text-white p-4 shadow-lg`}>
          <div className="flex items-center gap-3 mb-2">
            <button 
              onClick={handleBackToScenarios}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <scenario.icon size={28} />
            <h1 className="text-xl font-bold">{scenario.title}</h1>
          </div>
          <p className="text-sm opacity-90">Toca cualquier declaración para escucharla claramente en inglés</p>
        </div>

        {/* Rights List */}
        <div className="flex-1 p-4">
          <div className="space-y-3">
            {scenario.rights.map((right, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => playAudio(right.audioFile)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Volume2 className="text-gray-400 group-hover:text-blue-500 transition-colors" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium leading-relaxed mb-2">
                        {right.spanish}
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        Se dirá en inglés: "{right.text}"
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Emergency Info */}
          <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-4">
            <h3 className="font-bold text-red-800 mb-2">Contactos de Emergencia</h3>
            <div className="text-sm text-red-700 space-y-1">
              <p>ACLU Derechos de Inmigrantes: 1-877-523-2155</p>
              <p>Centro Nacional de Derecho de Inmigración: 213-639-3900</p>
              <p>Asistencia Legal Local: 211 (marca para recursos locales)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Emergency Hotline Banner */}
      <div className="bg-red-600 text-white text-center py-3 px-4">
        <p className="font-bold text-sm">
          Línea Directa Coalición de Autodefensa Comunitaria & Union del Barrio
        </p>
        <a href="tel:2134446562" className="text-lg font-bold hover:underline">
          (213) 444-6562
        </a>
      </div>

      {/* Quick Instructions */}
      <div className="bg-blue-600 text-white py-4 px-6">
        <h3 className="font-bold text-center mb-3">Cómo Usar</h3>
        <div className="space-y-2 text-sm max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <div className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</div>
            <p>Selecciona el escenario que corresponde a tu situación</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</div>
            <p>Toca cualquier declaración para escucharla claramente en inglés</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</div>
            <p>Sostén tu teléfono hacia los oficiales para que puedan escuchar tus derechos</p>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Conoce Tus Derechos</h1>
          <p className="text-gray-600">Asistente de Audio para Encuentros con ICE</p>
          <p className="text-sm text-gray-500 mt-1">Elige tu situación para escuchar tus derechos en inglés claro</p>
        </div>
      </div>

      {/* Scenarios Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {scenarios.map((scenario) => {
            const IconComponent = scenario.icon;
            return (
              <button
                key={scenario.id}
                onClick={() => setCurrentScenario(scenario.id)}
                className={`${scenario.color} text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white/20 p-4 rounded-full mb-4 group-hover:bg-white/30 transition-colors">
                    <IconComponent size={32} />
                  </div>
                  <h2 className="text-lg font-bold mb-2">{scenario.title}</h2>
                  <p className="text-sm opacity-90">
                    {scenario.rights.length} derechos disponibles
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightsAudioApp;