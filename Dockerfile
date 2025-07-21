FROM codercom/code-server:4.96.4

# when we are trying to run some bash commands like "update", "curl" etc, 
# we gotta give user root access
USER root

RUN apt-get update \
    && apt-get install -y curl \
    && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash \
    && export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")" \
    && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" \
    && nvm install node \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Revert to the code-server default user
USER coder
# Expose code-server's default port
EXPOSE 8080

RUN mkdir -p /home/coder/bolty-worker

# Start code-server on container launch
CMD ["code-server", "--auth", "none", "--bind-addr", "0.0.0.0:8080", "--disable-telemetry", "/home/coder/bolty-worker"]

# docker run -d -p 8080:8080 -v /tmp/bolty-worker:/tmp/bolty-worker code-server-nodev22
# docker run -d -p 8080:8080 code-server-nodev22