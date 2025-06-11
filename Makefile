# Makefile : automatisation des tâches

# IP de ta VM
VM_IP=192.168.1.42
USER=vboxuser
PROJECT=Devops-monitoring-app

.PHONY: all build up down logs ssh deploy scp test-api

all: build up

build:
	docker-compose build --no-cache

up:
	docker-compose up -d

down:
	docker-compose down -v

logs:
	docker logs node-api

ssh:
	ssh $(USER)@$(VM_IP)

scp:
	scp -r . $(USER)@$(VM_IP):~/

deploy:
	ansible-playbook -i ansible/inventory.ini ansible/deploy.yml --ask-become-pass

test-api:
	curl http://localhost:3000/