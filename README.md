# EcoCred - Turning Waste into Wealth

## Overview

EcoCred is a technology-driven initiative aimed at promoting environmental sustainability by incentivizing individuals to engage in recycling efforts. The project aligns with the Indian Government's Green Credit initiative, encouraging the recycling of plastic bottles and metal cans. EcoCred allows users to earn credits for their contributions to waste management, which can later be redeemed for financial rewards or other incentives.

## Features

- **User Identification**: RFID or fingerprint scanning to ensure accurate tracking of individual contributions.
- **Material Recognition**: Uses inductive proximity sensors and optical gates to categorize and measure recyclable materials.
- **Credit System**: Users earn credits based on the type and size of materials they recycle. These credits can be redeemed for rewards or converted into Green Credits.
- **Raspberry Pi 5**: The core system powered by a Raspberry Pi 5 for robust processing and real-time data handling.
- **Centralized Database**: A real-time database that tracks users' recycling history and earned credits, accessible via a website.
- **Website**: Provides users access to track their credits, history, and more.
- **Green Credit Integration**: Potential future integration with government initiatives for further incentives.

## Key Components

1. **User Identification**:
   - RFID and fingerprint scanners for personalized tracking.
   
2. **Material Detection**:
   - Inductive proximity sensors for detecting plastic and metal.
   - Optical gates for measuring the size of plastic bottles (e.g., 200 ml, 500 ml, 1 liter).

3. **Processing Unit**:
   - Powered by Raspberry Pi 5, managing sensors, calculations, and display output.

4. **Display Interface**:
   - Provides users with real-time feedback on their recycling activities and credits.

5. **Database and Website**:
   - Centralized storage of data, including credits, user history, and materials recycled.
   - Website available at [ecocred.m4xy.org](https://ecocred.m4xy.org).

## Future Implementations

- **Expanded Materials**: Future versions may accept a broader range of recyclable materials such as glass, paper, and electronic waste.
- **Mobile Application**: A mobile app that syncs with the website, providing users with a more convenient way to track and redeem credits.
- **Business Partnerships**: Collaborations with businesses to allow users to redeem credits for discounts or rewards.

## How It Works

1. **Recycling**: Users recycle materials (plastic bottles, metal cans) into the EcoCred device.
2. **Identification**: The system uses RFID or fingerprint scanning to identify the user.
3. **Material Categorization**: The sensors detect the type of material and its size to calculate the recycling value.
4. **Credit Assignment**: Based on the material and size, users earn EcoCred credits.
5. **Redemption**: Credits can be redeemed for rewards or integrated into the Indian Government’s Green Credit initiative for additional incentives.

## Setup Instructions

1. **Hardware Requirements**:
   - Raspberry Pi 5
   - RFID scanner or fingerprint scanner
   - Inductive proximity sensors
   - Optical gates for size detection

2. **Software Requirements**:
   - Python (for Raspberry Pi)
   - MongoDB (for storing user data and recycling history)
   - Website for tracking and redeeming credits

3. **Installation**:
   - Clone this repository and follow the installation instructions in the setup guide for hardware and software configurations.

## Contributing

We welcome contributions to further develop EcoCred. Please fork the repository, create a branch for your changes, and submit a pull request with a description of what was added or fixed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

For more information, visit the EcoCred website: [https://ecocred.m4xy.org](https://ecocred.m4xy.org).
