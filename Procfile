web:     bundle exec unicorn -p $PORT -c ./config/unicorn.rb
worker:  bundle exec rake resque:work QUEUE=*
urgworker: bundle exec rake resque:work QUEUE=urgent
clock:     bundle exec resque-scheduler