#!/bin/bash

VM_NAME="VM-Debian-Pro-Project"  # Remplace par le nom exact de ma VM

echo "➡️ Démarrage de la VM $VM_NAME..."
VBoxManage startvm "$VM_NAME" --type headless

if [ $? -eq 0 ]; then
  echo "✅ VM démarrée avec succès."
else
  echo "❌ Échec du démarrage. Vérifie le nom de la VM."
fi
