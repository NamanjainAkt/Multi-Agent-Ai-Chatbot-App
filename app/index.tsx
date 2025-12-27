import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';
import { MessageCircle, Bot, Sparkles, Zap, Shield, Rocket } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Defs, RadialGradient, Stop } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedProps,
  withRepeat,
  withTiming,
  withSpring,
  withSequence,
  Easing,
  FadeInDown,
  FadeInUp,
  FadeIn,
} from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

// Siri-like Animated Orb Component
const AnimatedOrb = () => {
  const { colorScheme } = useColorScheme();

  // Multiple wave animations for Siri-like effect
  const wave1 = useSharedValue(0);
  const wave2 = useSharedValue(0);
  const wave3 = useSharedValue(0);
  const wave4 = useSharedValue(0);
  const wave5 = useSharedValue(0);

  const opacity1 = useSharedValue(0.8);
  const opacity2 = useSharedValue(0.6);
  const opacity3 = useSharedValue(0.7);

  React.useEffect(() => {
    // Create flowing wave animations with different speeds and patterns
    wave1.value = withRepeat(
      withSequence(
        withTiming(15, { duration: 1800, easing: Easing.inOut(Easing.sin) }),
        withTiming(-15, { duration: 1800, easing: Easing.inOut(Easing.sin) })
      ),
      -1,
      false
    );

    wave2.value = withRepeat(
      withSequence(
        withTiming(-12, { duration: 2200, easing: Easing.inOut(Easing.sin) }),
        withTiming(12, { duration: 2200, easing: Easing.inOut(Easing.sin) })
      ),
      -1,
      false
    );

    wave3.value = withRepeat(
      withSequence(
        withTiming(18, { duration: 2600, easing: Easing.inOut(Easing.sin) }),
        withTiming(-18, { duration: 2600, easing: Easing.inOut(Easing.sin) })
      ),
      -1,
      false
    );

    wave4.value = withRepeat(
      withSequence(
        withTiming(-10, { duration: 2000, easing: Easing.inOut(Easing.sin) }),
        withTiming(10, { duration: 2000, easing: Easing.inOut(Easing.sin) })
      ),
      -1,
      false
    );

    wave5.value = withRepeat(
      withSequence(
        withTiming(14, { duration: 2400, easing: Easing.inOut(Easing.sin) }),
        withTiming(-14, { duration: 2400, easing: Easing.inOut(Easing.sin) })
      ),
      -1,
      false
    );

    // Pulsing opacity for depth
    opacity1.value = withRepeat(
      withSequence(
        withTiming(0.9, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
        withTiming(0.6, { duration: 2000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );

    opacity2.value = withRepeat(
      withSequence(
        withTiming(0.8, { duration: 2500, easing: Easing.inOut(Easing.ease) }),
        withTiming(0.5, { duration: 2500, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );

    opacity3.value = withRepeat(
      withSequence(
        withTiming(0.85, { duration: 2200, easing: Easing.inOut(Easing.ease) }),
        withTiming(0.55, { duration: 2200, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );
  }, []);

  const animatedProps1 = useAnimatedProps(() => ({
    r: 45 + wave1.value,
    opacity: opacity1.value,
  }));

  const animatedProps2 = useAnimatedProps(() => ({
    r: 38 + wave2.value,
    opacity: opacity2.value,
  }));

  const animatedProps3 = useAnimatedProps(() => ({
    r: 42 + wave3.value,
    opacity: opacity3.value,
  }));

  const animatedProps4 = useAnimatedProps(() => ({
    r: 35 + wave4.value,
    opacity: opacity1.value * 0.8,
  }));

  const animatedProps5 = useAnimatedProps(() => ({
    r: 40 + wave5.value,
    opacity: opacity2.value * 0.7,
  }));

  const isDark = colorScheme === 'dark';

  return (
    <View style={{ width: 160, height: 160, justifyContent: 'center', alignItems: 'center' }}>
      <Svg width="160" height="160" viewBox="0 0 160 160">
        <Defs>
          <RadialGradient id="siriGrad1" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor={isDark ? '#a78bfa' : '#9333ea'} stopOpacity="1" />
            <Stop offset="100%" stopColor={isDark ? '#6d28d9' : '#5b21b6'} stopOpacity="0.4" />
          </RadialGradient>
          <RadialGradient id="siriGrad2" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor={isDark ? '#ec4899' : '#db2777'} stopOpacity="1" />
            <Stop offset="100%" stopColor={isDark ? '#a855f7' : '#9333ea'} stopOpacity="0.3" />
          </RadialGradient>
          <RadialGradient id="siriGrad3" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor={isDark ? '#3b82f6' : '#2563eb'} stopOpacity="1" />
            <Stop offset="100%" stopColor={isDark ? '#8b5cf6' : '#7c3aed'} stopOpacity="0.3" />
          </RadialGradient>
          <RadialGradient id="siriGrad4" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor={isDark ? '#f472b6' : '#ec4899'} stopOpacity="1" />
            <Stop offset="100%" stopColor={isDark ? '#c084fc' : '#a855f7'} stopOpacity="0.2" />
          </RadialGradient>
          <RadialGradient id="siriGrad5" cx="50%" cy="50%" r="50%">
            <Stop offset="0%" stopColor={isDark ? '#60a5fa' : '#3b82f6'} stopOpacity="1" />
            <Stop offset="100%" stopColor={isDark ? '#a78bfa' : '#8b5cf6'} stopOpacity="0.2" />
          </RadialGradient>
        </Defs>

        {/* Multiple flowing layers for Siri effect */}
        <AnimatedCircle cx="80" cy="80" fill="url(#siriGrad1)" animatedProps={animatedProps1} />
        <AnimatedCircle cx="80" cy="80" fill="url(#siriGrad2)" animatedProps={animatedProps2} />
        <AnimatedCircle cx="80" cy="80" fill="url(#siriGrad3)" animatedProps={animatedProps3} />
        <AnimatedCircle cx="80" cy="80" fill="url(#siriGrad4)" animatedProps={animatedProps4} />
        <AnimatedCircle cx="80" cy="80" fill="url(#siriGrad5)" animatedProps={animatedProps5} />
      </Svg>
    </View>
  );
};

// Animated gradient background component
const AnimatedGradient = () => {
  const rotation = useSharedValue(0);

  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 20000, easing: Easing.linear }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <Animated.View
      style={[animatedStyle]}
      className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-500/20 dark:bg-purple-400/20"
    />
  );
};

// Feature card component with animation
const FeatureCard = ({
  icon: Icon,
  title,
  delay = 0
}: {
  icon: any;
  title: string;
  delay?: number;
}) => {
  const scale = useSharedValue(1);
  const { colorScheme } = useColorScheme();

  React.useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 1500, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const iconColor = colorScheme === 'dark' ? '#ffffff' : '#9333ea';

  return (
    <Animated.View
      entering={FadeInDown.delay(delay).springify()}
      className="items-center flex-1 min-w-[90px] mb-4"
    >
      <Animated.View
        style={[animatedStyle]}
        className="bg-purple-500/10 dark:bg-purple-400/10 p-4 rounded-2xl mb-2 shadow-lg border border-purple-500/20 dark:border-purple-400/20"
      >
        <Icon size={24} color={iconColor} />
      </Animated.View>
      <Text className="text-center text-xs font-semibold text-foreground" numberOfLines={2}>
        {title}
      </Text>
    </Animated.View>
  );
};

export default function Screen() {
  const { colorScheme } = useColorScheme();
  const logoScale = useSharedValue(0);
  const glowOpacity = useSharedValue(0);

  React.useEffect(() => {
    logoScale.value = withSpring(1, {
      damping: 10,
      stiffness: 100,
    });

    glowOpacity.value = withRepeat(
      withSequence(
        withTiming(0.8, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
        withTiming(0.3, { duration: 2000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      false
    );
  }, []);

  const logoAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value }],
  }));

  const glowAnimatedStyle = useAnimatedStyle(() => ({
    opacity: glowOpacity.value,
  }));

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Animated Background Elements */}
      <View className="absolute inset-0 overflow-hidden">
        <AnimatedGradient />
        <Animated.View
          style={[glowAnimatedStyle]}
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-500/20 dark:bg-cyan-500/20"
        />
      </View>

      <View className="flex-1 justify-center items-center px-6 relative z-10">
        {/* Logo and Branding */}
        <Animated.View
          entering={FadeInUp.springify()}
          className="items-center mb-8 w-full max-w-sm"
        >
          <View className="relative mb-6">
            {/* Glow effect behind orb */}
            <Animated.View
              style={[glowAnimatedStyle]}
              className="absolute inset-0 bg-purple-500/30 dark:bg-purple-400/30 rounded-full scale-150"
            />

            {/* Animated Orb */}
            <Animated.View style={[logoAnimatedStyle]}>
              <AnimatedOrb />
            </Animated.View>
          </View>

          <Animated.View entering={FadeIn.delay(200)}>
            <Text className="text-5xl font-black text-purple-600 dark:text-purple-400 mb-2 text-center">
              XOXO
            </Text>
          </Animated.View>

          <Animated.View entering={FadeIn.delay(300)}>
            <Text className="text-lg font-semibold text-muted-foreground text-center">
              Multi-Agent AI Assistant
            </Text>
          </Animated.View>

          <Animated.View entering={FadeIn.delay(400)}>
            <Text className="text-sm text-muted-foreground/80 text-center mt-2">
              Powered by Advanced Intelligence
            </Text>
          </Animated.View>
        </Animated.View>

        {/* Features Grid with Glassmorphism */}
        <Animated.View
          entering={FadeInDown.delay(500).springify()}
          className="w-full max-w-sm mb-8"
        >
          <View className="bg-card/40 backdrop-blur-xl p-6 rounded-3xl border border-border shadow-2xl">
            <View className="flex-row justify-center gap-3 mb-6 flex-wrap">
              <FeatureCard icon={Bot} title="Multiple AI Agents" delay={600} />
              <FeatureCard icon={MessageCircle} title="Smart Conversations" delay={700} />
              <FeatureCard icon={Sparkles} title="Intelligent Help" delay={800} />
            </View>

            <View className="flex-row justify-center gap-3 flex-wrap">
              <FeatureCard icon={Zap} title="Lightning Fast" delay={900} />
              <FeatureCard icon={Shield} title="Secure & Private" delay={1000} />
              <FeatureCard icon={Rocket} title="Always Learning" delay={1100} />
            </View>

            <Animated.View entering={FadeIn.delay(1200)}>
              <Text className="text-center text-sm text-foreground/70 mt-4 leading-5">
                Experience the next generation of AI assistance with multiple specialized agents working together to provide you with the best answers and support.
              </Text>
            </Animated.View>
          </View>
        </Animated.View>

        {/* Get Started Button with Premium Styling */}
        <Animated.View
          entering={FadeInUp.delay(1300).springify()}
          className="w-full max-w-sm"
        >
          <Link href="/" asChild>
            <Button className="w-full h-14 rounded-2xl bg-purple-600 dark:bg-purple-500 shadow-xl">
              <View className="flex-row items-center gap-2">
                <Text className="text-lg font-bold text-white">Get Started</Text>
                <Rocket size={20} color="#ffffff" />
              </View>
            </Button>
          </Link>

          <Animated.View entering={FadeIn.delay(1400)}>
            <Text className="text-center text-xs text-muted-foreground mt-4 px-4">
              Join thousands of users already experiencing the future of AI
            </Text>
          </Animated.View>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

