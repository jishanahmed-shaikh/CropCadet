import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, MapPin, Phone, Mail, Settings, Bell, Moon, Globe, CircleHelp as HelpCircle, FileText, LogOut, CreditCard as Edit3, ChevronRight, Camera, Smartphone, Wifi, Download } from 'lucide-react-native';

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);

  const userInfo = {
    name: 'Rajesh Kumar',
    nameHindi: 'राजेश कुमार',
    phone: '+91 98765 43210',
    email: 'rajesh.kumar@gmail.com',
    location: 'Village Kharkhanda, Pune, Maharashtra',
    farmSize: '2.5 acres',
    crops: ['Wheat', 'Rice', 'Cotton'],
    joinDate: 'January 2024',
  };

  const stats = [
    { label: 'Scans Done', value: '23', icon: Camera },
    { label: 'Price Alerts', value: '5', icon: Bell },
    { label: 'Schemes Applied', value: '3', icon: FileText },
    { label: 'Days Active', value: '45', icon: Smartphone },
  ];

  const menuItems = [
    {
      id: 1,
      title: 'Edit Profile',
      subtitle: 'Update your information',
      icon: Edit3,
      color: '#3B82F6',
      action: () => {},
    },
    {
      id: 2,
      title: 'My Farm Details',
      subtitle: 'Manage farm information',
      icon: MapPin,
      color: '#22C55E',
      action: () => {},
    },
    {
      id: 3,
      title: 'Scan History',
      subtitle: 'View past crop scans',
      icon: Camera,
      color: '#F59E0B',
      action: () => {},
    },
    {
      id: 4,
      title: 'Price Alerts',
      subtitle: 'Manage market alerts',
      icon: Bell,
      color: '#EF4444',
      action: () => {},
    },
    {
      id: 5,
      title: 'Applied Schemes',
      subtitle: 'Track applications',
      icon: FileText,
      color: '#8B5CF6',
      action: () => {},
    },
    {
      id: 6,
      title: 'Offline Data',
      subtitle: 'Download for offline use',
      icon: Download,
      color: '#06B6D4',
      action: () => {},
    },
    {
      id: 7,
      title: 'Help & Support',
      subtitle: 'Get assistance',
      icon: HelpCircle,
      color: '#10B981',
      action: () => {},
    },
  ];

  const languages = [
    'हिंदी (Hindi)', 'मराठी (Marathi)', 'English', 'गुजराती (Gujarati)', 'ಕನ್ನಡ (Kannada)'
  ];

  const [selectedLanguage, setSelectedLanguage] = useState('हिंदी (Hindi)');

  const MenuItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.menuItem} onPress={item.action}>
      <View style={[styles.menuIcon, { backgroundColor: item.color + '20' }]}>
        <item.icon size={24} color={item.color} />
      </View>
      <View style={styles.menuContent}>
        <Text style={styles.menuTitle}>{item.title}</Text>
        <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
      </View>
      <ChevronRight size={20} color="#9CA3AF" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg' }}
                style={styles.avatar}
              />
              <TouchableOpacity style={styles.editAvatarButton}>
                <Edit3 size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{userInfo.name}</Text>
              <Text style={styles.userNameHindi}>{userInfo.nameHindi}</Text>
              <View style={styles.locationRow}>
                <MapPin size={16} color="#6B7280" />
                <Text style={styles.userLocation}>{userInfo.location}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <View style={styles.statIcon}>
                <stat.icon size={20} color="#22C55E" />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Farm Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Farm Information</Text>
          <View style={styles.farmCard}>
            <View style={styles.farmDetail}>
              <Text style={styles.farmLabel}>Farm Size</Text>
              <Text style={styles.farmValue}>{userInfo.farmSize}</Text>
            </View>
            <View style={styles.farmDetail}>
              <Text style={styles.farmLabel}>Main Crops</Text>
              <Text style={styles.farmValue}>{userInfo.crops.join(', ')}</Text>
            </View>
            <View style={styles.farmDetail}>
              <Text style={styles.farmLabel}>Member Since</Text>
              <Text style={styles.farmValue}>{userInfo.joinDate}</Text>
            </View>
          </View>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          
          {/* App Settings */}
          <View style={styles.settingsCard}>
            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Moon size={24} color="#6B7280" />
                <View style={styles.settingText}>
                  <Text style={styles.settingTitle}>Dark Mode</Text>
                  <Text style={styles.settingSubtitle}>Save battery & reduce eye strain</Text>
                </View>
              </View>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: '#E5E7EB', true: '#22C55E' }}
                thumbColor={darkMode ? '#FFFFFF' : '#FFFFFF'}
              />
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Bell size={24} color="#6B7280" />
                <View style={styles.settingText}>
                  <Text style={styles.settingTitle}>Notifications</Text>
                  <Text style={styles.settingSubtitle}>Price alerts & weather updates</Text>
                </View>
              </View>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: '#E5E7EB', true: '#22C55E' }}
                thumbColor={notifications ? '#FFFFFF' : '#FFFFFF'}
              />
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Wifi size={24} color="#6B7280" />
                <View style={styles.settingText}>
                  <Text style={styles.settingTitle}>Offline Mode</Text>
                  <Text style={styles.settingSubtitle}>Use app without internet</Text>
                </View>
              </View>
              <Switch
                value={offlineMode}
                onValueChange={setOfflineMode}
                trackColor={{ false: '#E5E7EB', true: '#22C55E' }}
                thumbColor={offlineMode ? '#FFFFFF' : '#FFFFFF'}
              />
            </View>
          </View>

          {/* Language Selection */}
          <View style={styles.languageCard}>
            <View style={styles.languageHeader}>
              <Globe size={24} color="#6B7280" />
              <Text style={styles.languageTitle}>Language / भाषा</Text>
            </View>
            <Text style={styles.selectedLanguage}>{selectedLanguage}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.languageScroll}>
              {languages.map((language) => (
                <TouchableOpacity
                  key={language}
                  style={[
                    styles.languageChip,
                    selectedLanguage === language && styles.languageChipActive
                  ]}
                  onPress={() => setSelectedLanguage(language)}
                >
                  <Text style={[
                    styles.languageChipText,
                    selectedLanguage === language && styles.languageChipTextActive
                  ]}>
                    {language}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Menu</Text>
          <View style={styles.menuContainer}>
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </View>
        </View>

        {/* Logout */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.logoutButton}>
            <LogOut size={20} color="#EF4444" />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>

        {/* App Version */}
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Kisan Assistant v1.0.0</Text>
          <Text style={styles.versionSubtext}>Made with ❤️ for Indian Farmers</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#111827',
    marginBottom: 4,
  },
  userNameHindi: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userLocation: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    marginLeft: 4,
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#DCFCE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#111827',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 10,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
    marginBottom: 12,
  },
  farmCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  farmDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  farmLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#6B7280',
  },
  farmValue: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#111827',
  },
  settingsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    marginLeft: 12,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#111827',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  languageCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  languageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  languageTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#111827',
    marginLeft: 12,
  },
  selectedLanguage: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#22C55E',
    marginBottom: 12,
  },
  languageScroll: {
    marginTop: 8,
  },
  languageChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
  },
  languageChipActive: {
    backgroundColor: '#22C55E',
  },
  languageChipText: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#374151',
  },
  languageChipTextActive: {
    color: '#FFFFFF',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  menuIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#111827',
    marginBottom: 2,
  },
  menuSubtitle: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#6B7280',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#EF4444',
    marginLeft: 8,
  },
  versionContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  versionText: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
    marginBottom: 4,
  },
  versionSubtext: {
    fontSize: 10,
    fontFamily: 'Inter-Regular',
    color: '#9CA3AF',
  },
});