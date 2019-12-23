namespace :home do
  desc "Create two homes"
  task create_homes: :environment do
    user = User.find_or_create_by(
      name: 'Jose',
      last_name: 'Perez',
      email: 'josep@gmail.com',
      mobile_phone: '9992397993',
      work_place: 'homie'
    )
    owner = Owner.find_or_create_by(
      user: user,
      curp: 'abcdefghji123',
      registered_in_srpago: true
    )
    Home.find_or_create_by(
      owner: owner,
      price: 192.10,
      extra_service: 100.00
    )
    user = User.find_or_create_by(
      name: 'Dianela',
      last_name: 'Estrella',
      email: 'dianelaek@gmail.com',
      mobile_phone: '9962192993',
      work_place: 'protexa'
    )
    owner = Owner.find_or_create_by(
      user: user,
      curp: 'dcedccma201de',
      registered_in_srpago: true
    )
    Home.find_or_create_by(
      owner: owner,
      price: 592.10,
      extra_service: 150.20
    )
  end

end

